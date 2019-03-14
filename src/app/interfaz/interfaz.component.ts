import { Component, OnInit } from '@angular/core';
import {SetSummary} from './summary'
import {CodigoUser} from './codigoUser'
import {CodigoEnsamblador} from './codigoEnsamblador'

@Component({
  selector: 'interfaz',
  templateUrl: './interfaz.component.html'
})
export class InterfazComponent implements OnInit {
public instruction:SetSummary;
public instructions:Array<SetSummary>
public codigoUser:CodigoUser;
public ArrayCodigoUser:Array<CodigoUser>
public codigoEnsamblador:CodigoEnsamblador;
public ArrayCodigoEnsamblador:Array<CodigoEnsamblador>
   public searchText : string;
   public searchOperacion: string;
  constructor() {
this.instruction=new SetSummary('ADD','Rd','Add two Registers without Carry','Rd=Rd + Rr','Z,C,N,V,H','1','','')

this.instructions=[
//suma
new SetSummary('ADD','Rd','Add two Registers without Carry','Rd=Rd + Rr','Z,C,N,V,H','1','suma','Arithmetic'),
new SetSummary('ADC','Rd','Add two Registers with Carry','Rr=Rr + Rd + C','Z,C,N,V,H','1','suma','Arithmetic'),
new SetSummary('ADIW','Rdl','Add immediate to word','Rdh:Rdl= Rdh:Rdl + k','Z,C,N,V,H','2','suma','Arithmetic'),
//resta
new SetSummary('SUB','Rd','Subtract two Registers','Rd= Rd - Rr','Z,C,N,V,H','1','resta','Arithmetic'),
new SetSummary('SUBI','Rd','Subtract Constant from Registers','Rd= Rd - k','Z,C,N,V,H','1','resta','Arithmetic'),
new SetSummary('SBC','Rd','Subtract two Registers with Carry','Rd= Rd - k - C','Z,C,N,V,H','1','resta','Arithmetic'),
new SetSummary('SBIW','Rdi','Subtract immwdiate from word','Rdh:Rdl = Rdh:Rdl - k','Z,C,N,V,H','1','resta','Arithmetic'),
//multiplicacion
new SetSummary('MUL','Rd','multiply Unsigned','R1:R0= Rd*Rr','Z,C','2','multiplicacion','Arithmetic'),
new SetSummary('MULS','Rd','multiply Signed','R1:R0= Rd*Rr','Z,C','2','multiplicacion','Arithmetic'),
new SetSummary('MULSU','Rd','multiply Signed with Unsigned','R1:R0= Rd*Rr','Z,C','2','multiplicacion','Arithmetic'),
new SetSummary('FMUL','Rd','Fractionl multiply Unsigned','R1:R0= (Rd*Rr) << 1','Z,C,N,V,H','1','multiplicacion','Arithmetic')


]
  
this.ArrayCodigoUser=[new CodigoUser('','')];
this.ArrayCodigoEnsamblador=[new CodigoEnsamblador('','','')];
   
   }




    ngOnInit() {

  }

  seleccion($Mnemonics,$operands,$description,$operation){
  	this.codigoUser=new CodigoUser($description,$operation);
  	this.ArrayCodigoUser.push(this.codigoUser);
    this.codigoUser=new CodigoUser('','');

    this.codigoEnsamblador=new CodigoEnsamblador($Mnemonics,$operands,$description);
  	this.ArrayCodigoEnsamblador.push(this.codigoEnsamblador);
    this.codigoEnsamblador=new CodigoEnsamblador('','','');
  	
  }
  Remove(i){
  	this.ArrayCodigoUser.splice(i-1,1);
  	this.ArrayCodigoEnsamblador.splice(i-1,1);

  }

  seleccionEdit($index,$Mnemonics,$operands,$commentary){
this.codigoUser.operation=$operands;
this.codigoUser.commentary=$commentary;
this.codigoEnsamblador.commentary=$commentary;
this.codigoEnsamblador.Mnemonics=$Mnemonics;

}

modifica(){
  

}

}