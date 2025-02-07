import { FormEvent, useState } from "react";
import {MyBanner} from "../../components";
import { Button, Label, Radio, Select, Textarea, TextInput } from "flowbite-react";
import { FormTracer } from "../../interfaces/school";
import SchoolService from "../../services/school";
import Swal from "sweetalert2";




export const StudyTracer = () => {

  const [jenisKelamin] = useState(['Laki-Laki', 'Perempuan'])
  const [statusPekerjaan] = useState(['Bekerja Fulltime', 'Part time', 'Tidak Bekerja', 'Wirausaha', 'Mahasiswa', 'Lainnya'])
  const [faktorSuasana] = useState(['Tidak ada', 'Desain Kurikulum', 'Metode Pembelajaran', 'Sarana Pembelajaran/Kelas', 'Sarana Lab/Bengkel', 'Pelayanan Administrasi/Akademik', 'Lainnya'])

  const [formData, setFormData] = useState<FormTracer>({
    "name": "", //wajib
    "birth_place": "",
    "birth_date": "",
    "ttl": "",
    "gender": jenisKelamin[0], //wajib
    "address": "", //wajib
    "addressNow": "",
    "phone": "", //wajib
    "email": "", //wajib
    "startYear": "", //wajib
    "endYear": "", //wajib
    "employmentStatus": statusPekerjaan[0], //wajib
    "institutionName": "",
    "institutionAddress": "",
    "isSatisfactionMet": "Ya",
    "disSatisfactionFactors": faktorSuasana[0],
    "studyIssues": ""
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    Swal.showLoading()

    try{
      const response = await SchoolService().tracer({...formData, 'ttl': formData.birth_place+", "+formData.birth_date})

      if(response.status == 201) {
        Swal.fire({
          title: "Sukses submit data",
          text: response.message,
          icon: "success"
        });

        setFormData({
          "name": "", //wajib
          "birth_place": "",
          "birth_date": "",
          "ttl": "",
          "gender": jenisKelamin[0], //wajib
          "address": "", //wajib
          "addressNow": "",
          "phone": "", //wajib
          "email": "", //wajib
          "startYear": "", //wajib
          "endYear": "", //wajib
          "employmentStatus": statusPekerjaan[0], //wajib
          "institutionName": "",
          "institutionAddress": "",
          "isSatisfactionMet": "Ya",
          "disSatisfactionFactors": faktorSuasana[0],
          "studyIssues": ""
        })
      }

    }catch{
      Swal.fire({
        title: "Gagal submit data",
        icon: "error"
      });
    }finally{
      Swal.hideLoading()
    }
  }

  return (
    <>
      <MyBanner title="Study Tracer" currentPage="Study Tracer" beforePages={[{title: "Beranda", href: "/"}]} />

      <form className="container py-10 flex max-w-xl flex-col gap-4" method="post" onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nama" value="Nama" />
          </div>
          <TextInput required id="nama" type="text" placeholder="Masukkan nama..." onChange={(e) => setFormData({...formData, 'name': e.target.value})} value={formData.name}  />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Tempat Lahir" value="Tempat Lahir" />
          </div>
          <TextInput id="Tempat Lahir" type="text" placeholder="Masukkan tempat lahir..." onChange={(e) => setFormData({...formData, 'birth_place': e.target.value})} value={formData.birth_place}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Tanggal Lahir" value="Tanggal Lahir" />
          </div>
          <TextInput id="Tanggal Lahir" type="date" placeholder="Masukkan tanggal lahir..." onChange={(e) => setFormData({...formData, 'birth_date': e.target.value})} value={formData.birth_date}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Jenis Kelamin" value="Jenis Kelamin" />
          </div>
          <Select required id="Jenis Kelamin" onChange={(e) => setFormData({...formData, 'gender': e.target.value})} value={formData.gender}>
            {
              jenisKelamin.map(value=>(
                <option key={value}>{value}</option>
              ))
            }
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Alamat Lengkap" value="Alamat Lengkap" />
          </div>
          <Textarea required id="Alamat Lengkap" placeholder="Masukkan alamat lengkap..."  rows={4} onChange={(e) => setFormData({...formData, 'address': e.target.value})} value={formData.address}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Alamat Sekarang" value="Alamat Sekarang" />
          </div>
          <Textarea required id="Alamat Sekarang" placeholder="Masukkan alamat sekarang..."  rows={4} onChange={(e) => setFormData({...formData, 'addressNow': e.target.value})} value={formData.addressNow}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="No HP" value="No HP" />
          </div>
          <TextInput required id="No HP" type="number" placeholder="Masukkan no hp..."  onChange={(e) => setFormData({...formData, 'phone': e.target.value})} value={formData.phone}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput required id="email" type="email" placeholder="Masukkan email..."  onChange={(e) => setFormData({...formData, 'email': e.target.value})} value={formData.email}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Tahun Masuk" value="Tahun Masuk" />
          </div>
          <TextInput required id="Tahun Masuk" type="number" placeholder="Masukkan Tahun Masuk..."  onChange={(e) => setFormData({...formData, 'startYear': e.target.value})} value={formData.startYear}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Tahun Lulus" value="Tahun Lulus" />
          </div>
          <TextInput required id="Tahun Lulus" type="number" placeholder="Masukkan Tahun Lulus..."  onChange={(e) => setFormData({...formData, 'endYear': e.target.value})} value={formData.endYear}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Status Pekerjaan" value="Status Pekerjaan" />
          </div>
          <Select required id="Status Pekerjaan" onChange={(e) => setFormData({...formData, 'employmentStatus': e.target.value})} value={formData.employmentStatus}>
          {
              statusPekerjaan.map(value=>(
                <option key={value}>{value}</option>
              ))
            }
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Nama Instansi" value="Nama Instansi" />
          </div>
          <TextInput id="Nama Instansi" type="text" placeholder="Masukkan Nama Instansi..."  onChange={(e) => setFormData({...formData, 'institutionName': e.target.value})} value={formData.institutionName}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Alamat Instansi" value="Alamat Instansi" />
          </div>
          <Textarea id="Alamat Instansi" placeholder="Masukkan alamat instansi..."  rows={4} onChange={(e) => setFormData({...formData, 'institutionAddress': e.target.value})} value={formData.institutionAddress}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="suasana" value="Apakah Suasa dan kegiatan akademik selama di sekolah telah sesuai dengan harapan anda?" />
          </div>
          <div className="flex items-center gap-2">
            <Radio id="suasana_yes" name="suasana" value="Ya" onChange={(e) => setFormData({...formData, 'isSatisfactionMet': e.target.value})} checked={formData.isSatisfactionMet == 'Ya'}/>
            <Label htmlFor="suasana_yes">Ya</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="suasana_no" name="suasana" value="Tidak" onChange={(e) => setFormData({...formData, 'isSatisfactionMet': e.target.value})} checked={formData.isSatisfactionMet == 'Tidak'}/>
            <Label htmlFor="suasana_no">Tidak</Label>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="faktor suasana" value="Jika tidak Sesuai, apa faktornya" />
          </div>
          <Select id="faktor suasana" onChange={(e) => setFormData({...formData, 'disSatisfactionFactors': e.target.value})} value={formData.disSatisfactionFactors}>
          {
              faktorSuasana.map(value=>(
                <option key={value}>{value}</option>
              ))
            }
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="permasalahan" value="Permasalahan apa yang dihadapi selama study di Sekolah ini" />
          </div>
          <TextInput id="permasalahan" type="text" placeholder="Masukkan permasalahan..." onChange={(e) => setFormData({...formData, 'studyIssues': e.target.value})}  value={formData.studyIssues}/>
        </div>
        <Button type="submit" className='bg-[#1E7DC1]'>Submit</Button>
      </form>
    </>
  );
};
