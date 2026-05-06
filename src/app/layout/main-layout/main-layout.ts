import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Home } from '../../features/home/home';
import { Contact } from '../../features/contact/contact';
import { Experience } from '../../features/experience/experience';
import { Projects } from '../../features/projects/projects';
import { Skills } from '../../features/skills/skills';
import { AboutMe } from '../../features/about-me/about-me';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Header, Home, AboutMe, Projects, Skills, Experience, Contact, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayout {}
