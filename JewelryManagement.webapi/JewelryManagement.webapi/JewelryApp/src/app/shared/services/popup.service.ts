import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Injectable, Type } from '@angular/core';
import { take } from 'rxjs/operators';
import {FORM_STATUS} from '../../common/enums/index';
import * as _ from 'lodash';
import { SnackBarService } from './snack-bar.service';

@Injectable({
    providedIn: 'root'
})
export class PopupDialogService {
    constructor(private readonly dialog: MatDialog, private readonly snackBarService: SnackBarService) {}

    openConfirmationDialog(
        dialogComp: Type<any>,
        dialogData: any,
        callbackFn?: (p: any, ...args: any[]) => void,
        isFormComponentInjected?: boolean,
        ...additionalParams: any[]
    ) {
        const defaultValues: any = {
            width: '450px',
            disableClose: false,
            data: { showActionBtn: true, text: dialogData.text }
        };

        const dialogRef = this.dialog.open(dialogComp, _.defaultsDeep(dialogData, defaultValues));

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe(data => {
                if (!data || !callbackFn) {
                    return;
                }

                if (isFormComponentInjected) {
                    callbackFn(data, ...additionalParams);
                    return;
                }

                data.status !== FORM_STATUS.INVALID ? callbackFn(data, ...additionalParams) : this.snackBarService.displaySnackBar();

            });
    }
}
