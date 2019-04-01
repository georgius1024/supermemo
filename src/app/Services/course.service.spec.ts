import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { defer } from 'rxjs';
import { CourseService } from './course.service';


function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
describe('CourseService', () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });

  it('should return expected data (HttpClient called once)', () => {
    const expected = [
      {
        index: 1,
        word: 'arouse',
        transcription: '[əˈraʊz]',
        translation: 'вызывать, пробуждать'
      },
    ];

    httpClientSpy.get.and.returnValue(asyncData(expected));

    const service: CourseService = TestBed.get(CourseService);

    service.isLoaded$.subscribe(
      () => {
        expect(service.getPortion(1)).toEqual(expected, 'expected vocabulary');
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      },
      fail
    );
  });
});
