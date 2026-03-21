import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-input",
  imports: [FormsModule, InputTextModule],
  templateUrl: "./input.html",
  styleUrl: "./input.css",
})
export class InputComponent {
  @Input() label: string = "";
  @Input() value: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Input() id: string = "inputField";
  @Input() disabled: boolean = false;
  @Input() class: string = "";
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}