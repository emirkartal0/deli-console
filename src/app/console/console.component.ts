import { NgIfContext } from '@angular/common';
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

      this.deneme(input);
      this.userInput.innerHTML = "";
      return;
    }
    this.userInput.innerHTML = input + e.key;
  }

  deneme(input: string) {
    console.log(input)
    let output
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!this.COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
    } else {
      output += `<div class="output"> ${this.COMMANDS[input]} </div>`;
    }

    this.terminalOutput.innerHTML = `${this.terminalOutput.innerHTML
      }<div class="terminal-line text-white">${output}</div>`;
    this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
  }

  COMMANDS: any = {
    help: 'Supported commands: ["<span class="code">about</span>", "<span class="code">experience</span>", "<span class="code">education</span>", "<span class="code">skills</span>", "<span class="code">contact</span>"]',
    about:
      "Hello 👋<br>I'm Twan Mulder. I'm a 23 yr old web developer currently living in the Netherlands. I have a burning passion to want and help others with code that I create. I enjoy the limitless potential of impact that I can have with what I build. It is what pushes me every day to become a better developer.",
    skills:
      '<span class="code">Languages:</span> HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, REST API\'s<br><span class="code">Frameworks:</span> React.js, Redux, GSAP, Sass, Vue.js',
    education:
      "B.Sc. Interactive Media & Technologies - Hanze University of Applied Sciences, Groningen",
    experience:
      "I'm currently working as a front-end developer at Storm Digital. My main areas of focus are helping our creative team build succesful digital creatives, and developing A/B tests for our CRO team.",
    contact:
      'You can contact me on any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://github.com/twanmulder" class="social link">GitHub</a>", "<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@toktoktwan" class="social link">Medium</a>", "<a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/toktoktwan/" class="social link">Twitter</a>"]',
    bob: "<span style='font-size: 2rem;'>🐕</span>",
    party: "🎉🎉🎉",
    beer:
      '["<a target="_blank" rel="noopener noreferrer" href="https://anytimers.netlify.com" class="social link">Anytimers!</a>"]',
    "sudo rm -rf": ""
  };

}
