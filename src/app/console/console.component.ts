import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})

export class ConsoleComponent implements AfterViewInit {
  binding: string = '';
  userInput: any = '';
  terminalOutput: any = '';

  kosul = 'evet'
  constructor() { }

  ngAfterViewInit(): void {
    const _onBackspacePress = this.backspace.bind(this)
    document.addEventListener("keydown", _onBackspacePress);
    const _onKeyPress = this.key.bind(this);
    document.addEventListener("keypress", _onKeyPress);
    this.userInput = document.getElementById("userInput");
    this.terminalOutput = document.getElementById("terminalOutput");
  }

  backspace(e: KeyboardEvent) {
    if (e.key !== 'Backspace' && e.key !== 'Delete') {
      return;
    }
    console.log(this.userInput.innerHTML)
    this.userInput.innerHTML = this.userInput.innerHTML.slice(0, this.userInput.innerHTML.length - 1);
  }

  key(e: KeyboardEvent) {

    this.userInput = document.getElementById("userInput");
    const input = this.userInput.innerHTML;
    if (e.key === "Enter") {
      this.execute(input);
      this.userInput.innerHTML = "";
      return;
    }
    this.userInput.innerHTML = input + e.key;
  }

  execute(input: string) {
    let output
    input = input.toLowerCase();

    output = `<div class="terminal-line "><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!this.COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line text-red-500 ">no such command: <span class="output">"${input}"</span></div>`;
    } else {
      output += `<div class="output text-[#2afc14]"> ${this.COMMANDS[input]} </div>`;
    }

    this.terminalOutput.innerHTML = `${this.terminalOutput.innerHTML
      }<div class="terminal-line text-stone-300">${output}</div>`;
    this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
    console.log(this.terminalOutput.scrollHeight)
  }

  COMMANDS: any = {
    help: 'Supported commands: ["<span class="text-blue-500">about</span>", "<span class="text-blue-500">experience</span>", "<span class="text-blue-500">education</span>", "<span class="text-blue-500">skills</span>", "<span class="text-blue-500">contact</span>"]',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    skills:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    education:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    experience:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    contact:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    deli: "<span class='text-blue-500' style='font-size: 5rem;'>✈️</span>",
    party: "🎉🎉🎉",
    beer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  };

}
