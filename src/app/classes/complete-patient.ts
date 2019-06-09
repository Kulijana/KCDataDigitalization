import { BasicPatient } from "./basic-patient";
import { EqD5Form } from "./eq-d5-form";
import { GdsSrbForm } from "./gds-srb-form";
import { IpaqForm } from "./ipaq-form";
import { MmseForm } from "./mmse-form";
import { SarQolForm } from "./sar-qol-form";
import { SarcFForm } from "./sarc-f-form";
import { Sf36Form } from "./sf36-form";
import { SppbForm } from "./sppb-form";

export class CompletePatient{
    basicPatient: BasicPatient;
    eQD5Form: EqD5Form;
    gdsSrbForm: GdsSrbForm;
    ipaqForm: IpaqForm;
    mmseForm: MmseForm;
    sarQolForm: SarQolForm;
    sarcFForm: SarcFForm;
    sf36Form: Sf36Form;
    sppbForm: SppbForm;
}
