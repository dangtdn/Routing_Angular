import { Component, OnInit } from '@angular/core';
import { CourseViewModel } from 'src/app/_core/models/CourseViewModel';
import { CourseService } from 'src/app/_core/services/course.service';

@Component({
  selector: 'app-home-page',
  template: `
  <div class="container">
    <div class="display-4 text-center">Danh sách khóa học</div>
    <div class="row">
      <div class="col-4" *ngFor="let item of course">
          <div class="card text-white bg-dark mb-3" style="height:350px">
            <img class="card-img-top" [src]="item.hinhAnh" [alt]="item.tenKhoaHoc">
            <div class="card-body">
              <h4 class="card-title">{{item.tenKhoaHoc}}</h4>
              <p class="card-text">{{item.moTa}}</p>
            </div>
          </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  course: CourseViewModel[] = [];

  constructor(private courseService: CourseService) { }

  // lifecycle thực thi sau khi giao diện render (didmount)
  ngOnInit(): void {
    // let observableCourse = this.courseService.layDanhSachKhoaHoc();

    // observableCourse.subscribe((result) => {
    //   this.course = result;
    // },(errors) => {
    //   console.log('errors: ', errors.error)
    // })
    this.layDanhSachKhoaHoc();
  }

  layDanhSachKhoaHoc = async () => {
    try {
      let result = await this.courseService.layDanhSachKhoaHoc().pipe().toPromise();
      this.course = result;
    } catch (error) {
      console.log('errors: ', error)      
    }
  }

}
