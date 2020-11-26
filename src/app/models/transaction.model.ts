export class Transaction 
{
    TransactionMode:string;
    TransactionType?:string;
    SenderAccount: number;
    ReceiverAccount: number;
    TransactionAmount: number;
    TransactionDate: Date;
    Remarks?: string;
    Maturityinstruction?:string
}