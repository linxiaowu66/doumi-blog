import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, Index***REMOVED*** from 'typeorm';
import { Article ***REMOVED*** from './article';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false
***REMOVED***)
  username: string;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  password: string;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  @Index({ unique: true ***REMOVED***)
  email: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[];

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
***REMOVED***
