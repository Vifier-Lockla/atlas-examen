import {Request, Response} from 'express';
import {COURSES} from '../data/db-data';

export function getAllCourses(req: Request, res: Response): void {
    res.status(200).json({payload: Object.values(COURSES)
      .sort((c1: any, c2: any) => c1.seqNo - c2.seqNo)});
}


export function getCourseById(req: Request, res: Response): void {
    const courseId = req.params.id;
    const courses: any = Object.values(COURSES);
    const course = courses.find(cours => cours.id === courseId);

    res.status(200).json(course);
}
