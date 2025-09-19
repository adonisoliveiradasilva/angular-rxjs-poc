import { Component, Input } from '@angular/core';
import { DisplayTitle } from '../../atoms/app-display/display-title/display-title';
import { DisplayInfoSubtitle } from '../../atoms/app-display/display-info-subtitle/display-info-subtitle';
import { DisplayInfoTitle } from '../../atoms/app-display/display-info-title/display-info-title';
import { IDisplayInfo } from '../../../core/models/IDisplayInfo.model';

@Component({
  selector: 'app-display-info',
  imports: [DisplayTitle, DisplayInfoTitle, DisplayInfoSubtitle],
  templateUrl: './display-info.html',
  styleUrl: './display-info.scss'
})
export class DisplayInfo {
  @Input() info!: IDisplayInfo;
}
