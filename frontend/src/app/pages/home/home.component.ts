import { Component, inject, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { IAPIResponse, IEvent } from '../../model/model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  eventList:IEvent[]=[];
  eventService = inject(EventService)

  ngOnInit(): void {
    debugger;
    this.getEvents()
  }

  getEvents() {
    this.eventService.getAllEvents().subscribe((res: IAPIResponse) => {
      debugger;
      this.eventList = res.data;
    })
  }
}
