import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: 'Segment' })
export class Segment extends BaseEntity {

    @Column({ name: 'seg_nm_segment', type: 'varchar', length: 100, comment: 'Segment name'})
    segmNmSegment: string;
}