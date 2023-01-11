import { Segment } from "../entity/Segment";
import { BaseController } from "./BaseController";
import { Request } from 'express';

export class SegmentController extends BaseController<Segment> {

    constructor() {
        super(Segment);
    }

    async save(request: Request) {
        let _segment = <Segment>request.body;
        super.isRequired(_segment.segmNmSegment, 'O nome do segmento é obrigatório!');

        return super.save(_segment, request);
    }


}