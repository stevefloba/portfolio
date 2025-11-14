import { Component } from '@angular/core';
import { SeeFirst } from './see-first/see-first';
import { AboutMe } from './about-me/about-me';
import { SkillSet } from './skill-set/skill-set';
import { Projects } from './projects/projects';
import { ColleaguesThoughts } from './colleagues-thoughts/colleagues-thoughts';
import { ContactMe } from './contact-me/contact-me';

@Component({
  selector: 'app-landing-page',
  imports: [SeeFirst, AboutMe, SkillSet, Projects, ColleaguesThoughts, ContactMe],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
