import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/collection';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  public collectionData : Collection[]= [];
  constructor(private collectionService: CollectionService){}
  ngOnInit(): void {
    this.getCollection();
  }
  getCollection(){
    this.collectionService.getCollection().subscribe((res)=>{
      this.collectionData = res;
    },error=>{
      console.log("Something went wrong")
    })
  }
}
