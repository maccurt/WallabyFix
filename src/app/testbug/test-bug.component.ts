import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmService } from '../confirm.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './test-bug.component.html',
  styleUrls: ['./test-bug.component.scss']
})
export class TestBugComponent implements OnInit {
  // categoryList: Category[];
  // constructor(private activatedRoute: ActivatedRoute,
  //   private categoryService: CategoryService,
  //   private confirmSerive: ConfirmService,
  //   private modal: MatDialog
  //   ) { }

  constructor(private activatedRoute: ActivatedRoute,
    private confirmSerive: ConfirmService,

  ) { }

  ngOnInit() {

  }
}