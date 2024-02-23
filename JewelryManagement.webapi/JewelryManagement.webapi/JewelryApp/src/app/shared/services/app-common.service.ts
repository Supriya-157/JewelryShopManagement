import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class AppCommonService {

    private readonly editButtonFormClickEmit$ = new BehaviorSubject<boolean>(false);
    getFormState$ = this.editButtonFormClickEmit$.asObservable();

    private readonly itemDataToEmit$ = new BehaviorSubject<any>(null);
    getFormData$ = this.itemDataToEmit$.asObservable();

    setFormState(state: boolean): void {
        this.editButtonFormClickEmit$.next(state);
    }

    setFormData(item: any): void {
        this.itemDataToEmit$.next(item);
    }

}