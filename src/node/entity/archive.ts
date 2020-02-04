import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { Article } from './article';

@Entity()
export class Archive {
  @PrimaryGeneratedColumn()
  id: number;

  // 归档时间，诸如'2010-01'这样的字符
  @Column({
    type: "varchar",
    length: 200,
    nullable: false
  })
  @Index({ unique: true })
  archiveTime: string;

  @OneToMany(type => Article, article => article.archiveTime)
  articles: Article[]

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
}
