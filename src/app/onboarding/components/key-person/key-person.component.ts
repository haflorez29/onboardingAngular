import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-key-person',
  templateUrl: './key-person.component.html',
  styleUrls: ['./key-person.component.css'],
})
export class KeyPersonComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() instagram: string;
  @Input() name: string;
  @Input() mail: string;
  @Input() studio: string;
  @Input() position: string;
  @Input() color: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  sanitize(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`mailto:${this.mail}`);
  }
}
