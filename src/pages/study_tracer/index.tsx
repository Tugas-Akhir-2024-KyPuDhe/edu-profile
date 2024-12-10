import { useState } from "react";
import {MyBanner} from "../../components";
import { Button, Label, Radio, Select, Textarea, TextInput } from "flowbite-react";

export const StudyTracer = () => {

  const [jenisKelamin] = useState(['Laki-Laki', 'Perempuan'])
  const [statusPekerjaan] = useState(['Bekerja Fulltime', 'Part time', 'Tidak Bekerja', 'Wirausaha', 'Mahasiswa', 'Lainnya'])
  const [faktorSuasana] = useState(['Tidak ada', 'Desain Kurikulum', 'Metode Pembelajaran', 'Sarana Pembelajaran/Kelas', 'Sarana Lab/Bengkel', 'Pelayanan Administrasi/Akademik', 'Lainnya'])

  return (
    <>
      <MyBanner title="Study Tracer" currentPage="Study Tracer" beforePages={[{title: "Beranda", href: "/"}]} />

      <form className="container py-10 flex max-w-xl flex-col gap-4" method="post">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nama" value="Nama" />
          </div>
          <TextInput id="nama" type="text" placeholder="Masukkan nama..."  />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Tempat Lahir" value="Tempat Lahir" />
          </div>
          <TextInput id="Tempat Lahir" type="text" placeholder="Masukkan tempat lahir..."  />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Jenis Kelamin" value="Jenis Kelamin" />
          </div>
          <Select id="Jenis Kelamin" >
            {
              jenisKelamin.map(value=>(
                <option>{value}</option>
              ))
            }
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Alamat Lengkap" value="Alamat Lengkap" />
          </div>
          <Textarea id="Alamat Lengkap" placeholder="Masukkan alamat lengkap..."  rows={4} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Alamat Sekarang" value="Alamat Sekarang" />
          </div>
          <Textarea id="Alamat Sekarang" placeholder="Masukkan alamat sekarang..."  rows={4} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="No HP" value="No HP" />
          </div>
          <TextInput id="No HP" type="text" placeholder="Masukkan no hp..."  />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput id="email" type="email" placeholder="Masukkan email..."  />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Tahun Masuk" value="Tahun Masuk" />
          </div>
          <TextInput id="Tahun Masuk" type="text" placeholder="Masukkan Tahun Masuk..."  />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Tahun Lulus" value="Tahun Lulus" />
          </div>
          <TextInput id="Tahun Lulus" type="text" placeholder="Masukkan Tahun Lulus..."  />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Status Pekerjaan" value="Status Pekerjaan" />
          </div>
          <Select id="Status Pekerjaan" >
          {
              statusPekerjaan.map(value=>(
                <option>{value}</option>
              ))
            }
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Nama Instansi" value="Nama Instansi" />
          </div>
          <TextInput id="Nama Instansi" type="text" placeholder="Masukkan Nama Instansi..."  />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Alamat Instansi" value="Alamat Instansi" />
          </div>
          <Textarea id="Alamat Instansi" placeholder="Masukkan alamat instansi..."  rows={4} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="suasana" value="Apakah Suasa dan kegiatan akademik selama di sekolah telah sesuai dengan harapan anda?" />
          </div>
          <div className="flex items-center gap-2">
            <Radio id="suasana_yes" name="suasana" value="Ya" />
            <Label htmlFor="suasana_yes">Ya</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="suasana_no" name="suasana" value="Tidak" />
            <Label htmlFor="suasana_no">Tidak</Label>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="faktor suasana" value="Jika tidak Sesuai, apa faktornya" />
          </div>
          <Select id="faktor suasana">
          {
              faktorSuasana.map(value=>(
                <option>{value}</option>
              ))
            }
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="permasalahan" value="Permasalahan apa yang dihadapi selama study di Sekolah ini" />
          </div>
          <TextInput id="permasalahan" type="text" placeholder="Masukkan permasalahan..."  />
        </div>
        <Button type="button">Submit</Button>
      </form>
    </>
  );
};
