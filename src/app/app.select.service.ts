import { Injectable } from '@angular/core';



@Injectable()
/*Service*/
export class Degreelist {
    /* Array of object */
     MyEmpDeg = [{title: 'Bsc.Sc'}, {title: 'Bsc.Art'}, {title: 'Btech'}, {title: 'B.Com'}, {title: 'Masters'}];

    /* Function returning the array of object*/
     getTitle() {
        return this.MyEmpDeg;
     }
}
