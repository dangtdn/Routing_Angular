export class CourseViewModel {
    maKhoaHoc: string = '';
    tenKhoaHoc: string = '';
    moTa: string = '';
    luotXem: number = 0;
    maNhom: string = '';
    ngayTao: string = '';
    hinhAnh: string = '';
    soLuongHocVien: number = 0;
    nguoiTao:NguoiTao = new NguoiTao();
    danhMucKhoaHoc:DanhMucKhoaHoc = new DanhMucKhoaHoc();
}

class NguoiTao {
    maKhoaHoc: string;
    hoten: string;
    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
}

class DanhMucKhoaHoc {
    maDanhMucKhoaHoc: string;
    tenDanhMucKhoaHoc: string;
}
    