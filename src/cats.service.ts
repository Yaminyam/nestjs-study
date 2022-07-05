import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  remove(name: string) {
    const index = this.cats.findIndex(
      (cat: { name: string }) => cat.name === name,
    );
    this.cats.splice(index, 1);
  }

  update(name: string, age: number) {
    const index = this.cats.findIndex(
      (cat: { name: string }) => cat.name === name,
    );
    this.cats[index].age = age;
  }
}
