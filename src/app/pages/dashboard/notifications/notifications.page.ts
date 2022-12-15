import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { NavService } from 'src/app/services/basic/nav.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  list = [
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },

    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    },
    {
      heading: 'John Smith',
      content: 'Grab N Go Tacos would be delighted to cater your next event or party catering.',
      date: '4 Hours ago',
      image: 'assets/images/profilePic.png'

    }

  ]

  constructor(private modals: ModalService) { }

  ngOnInit() {
  }

  back(){
    this.modals.dismiss();
  }

}
