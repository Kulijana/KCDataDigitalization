export class GeriatricAssessmentForm {
    getUpAndGoTime: number;

    // Katz scale
    eating: number;
    clothing: number;
    bathing: number;
    moving: number;
    bathroom: number;
    continence: number;
    
    // Lawton scale
    mealPrepping: number;
    housework: number;
    clothWashing: number;
    prescribedMedication: number;
    traveling: number;
    groceryShopping: number;
    moneyManagement: number;
    phoneUsage: number;

    objectMemory: number;
    clock: string;
    dateTime: string;
    headRaise: string;

    depressed: boolean;
    lostInterest: boolean;
    feelingUnsafe: boolean;
}
