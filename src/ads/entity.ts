
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { BaseEntity } from "typeorm/repository/BaseEntity"
import { IsString, Length, IsInt, Min, Max, IsUrl, IsEmail } from "class-validator"

@Entity()
export default class Ad extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(4, 40)
  @Column("text", { nullable: false })
  title: string = ""

  @IsUrl()
  @Column("text", { nullable: false })
  picture: string = ""

  @IsInt()
  @Min(1)
  @Max(1000000)
  @Column("text", { nullable: false })
  price: number = 0

  @IsString()
  @Length(4, 40)
  @Column("text", { nullable: true })
  sellerName: string = ""

  @IsEmail()
  @Column("text", { nullable: false })
  sellerEmail: string = ""

  @IsString()
  @Length(10, 20)
  @Column("text", { nullable: true })
  sellerPhone: string = ""

  @IsString()
  @Length(0, 4000)
  @Column("text", { nullable: true })
  description: string = ""
}