import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

/**
 * @title Button toggle appearance
 */
@Component({
  selector: 'button-toggle-appearance-example',
  templateUrl: 'button-toggle-appearance-example.html',
  styleUrl: 'button-toggle-appearance-example.css',
  standalone: true,
  imports: [MatButtonToggleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleAppearanceExample {}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */