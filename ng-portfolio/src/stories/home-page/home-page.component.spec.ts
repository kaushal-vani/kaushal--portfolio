import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set user to null on logout', () => {
    component.doLogout();
    expect(component.user).toBeNull();
  });

  it('should set user on login', () => {
    component.doLogin();
    expect(component.user).toEqual({ name: 'Jane Doe' });
  });

  it('should set user on create account', () => {
    component.doCreateAccount();
    expect(component.user).toEqual({ name: 'Jane Doe' });
  });
});
