import { Color } from './../../constants/colors';
import { TeiConverterService } from './../../services/tei-converter.service';
import { ShowTranslationDialogComponent } from './../../components/dialogs/show-translation-dialog/show-translation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextData, Word } from 'src/app/classes/text-data';

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.sass']
})
export class TextPageComponent implements OnInit {
  // Set containing the indices of sentences that should be indented
  // Chose a set instead of an array, due to efficiency and easier API for removing
  indentedSentences: Set<number> = new Set();
  teiText = `<TEI>
              <teiHeader>
              <fileDesc>
                <titleStmt>
                <title>Exposition des Textes</title>
                <author>Schwarz, Roman</author>
                </titleStmt>
                <publicationStmt>
                </publicationStmt>
                <sourceDesc>
                <p>
              Ovid, Metamorphosen, V.55.-62
                </p>
                </sourceDesc>
              </fileDesc>
              </teiHeader>
              <text>
              <div>
              <lb n-individuell="1"/>
              <lb n-original="55"/>
              <s>
              <cl type="hs"> <w pos="Nominativ, Maskulinum" notation="Eigenname">Pyramus</w> <w pos="-" notation="und">et</w> <w pos="Nominativ, Femininum" notation="Eigenname">Thisbe</w> </cl> <pc>,</pc> <cl type="ns"> <w pos="Genitiv Plural, Maskulinum" notation="der junge Mann">iuvenum</w> <w pos="Nominativ Singular, Maskulinum; Superlativ" notation="der Schönste">pulcherrimus</w> <w pos="Nominativ Singular, Maskulinum" notation="der eine">alter</w> </cl> <pc>,</pc>

              <lb n-individuell="2"/>
              <lb n-original="56"/>
              <cl type="ns"> <w pos="Nominativ Singular, Femininum" notation="die andere">altera</w> </cl> <pc>,</pc> <cl type="ns 2"> <w pos="Akkusativ Plural, Femininum" notation="die">quas</w> <w pos="Nominativ Singular" notation="Orient">Oriens</w> <w pos="3. Person Singular Perfekt Indikativ Aktiv" notation="haben">habuit</w> </cl> <pc>,</pc> <cl type="ns"> <w pos="Femininum" notation="ausgezeichnet">praelata</w> <w pos="Ablativ Plural, Femininum" notation="das Mädchen">puellis</w> </cl> <pc>,</pc>

              <lb n-individuell="3"/>
              <lb n-original="57"/>
              <cl type="hs"> <w pos="Akkusativ Plural, Femininum" notation="benachbart">contiguas</w> <w pos="3. Person Plural Perfekt Indikativ Aktiv" notation="halten">tenuere</w> <w pos="Akkusativ Plural, Femininum" notation="das Haus">domos</w> </cl> <pc>,</pc> <cl type="ns"> <w pos="-" notation="wo">ubi</w> <w pos="3. Person Singular Präsens Indikativ Passiv" notation="sagen">dicitur</w> </cl> <cl type="ns 2"> <w pos="Akkusativ Singular, Femininum" notation="hoch">altam</w>

              <lb n-individuell="4"/>
              <lb n-original="58"/>
              <w pos="Ablativ Plural, Maskulinum" notation="der Tonziegel">coctilibus</w> <w pos="Ablativ Plural, Maskulinum" notation="die Stadtmauern">muris</w> <w pos="infinitv Perfekt Aktiv" notation="umgeben">cinxisse</w> <w pos="Nominativ Singular, Femininum" notation="Eigenname">Semiramis</w> <w pos="Akkusativ Singular, Femininum" notation="die Stadt">urbem</w> <pc>.</pc> </cl>
              </s>

              <lb n-individuell="5"/>
              <lb n-original="59"/>
              <s>
              <cl type="hs"> <w pos="Akkusativ Singular, Femininum" notation="die Bekanntschaft">notitiam</w> <w pos="Akkusativ Plural, Maskulinum" notation="Erster">primos</w> <w pos="-" notation="und">que</w> <w pos="Akkusativ Plural, Maskulinum" notation="der Schritt">gradus</w> <w pos="Nominativ Singular, Femininum" notation="die Nachbarschaft">vicinia</w> <w pos="3. Person Singular Perfekt Indikativ Aktiv" notation="bewirken">fecit</w> <pc>,</pc>

              <lb n-individuell="6"/>
              <lb n-original="60"/>
              <w pos="Ablativ Singular, Neutrum" notation="die Zeit">tempore</w> <w pos="3. Person Singular Perfekt Indikativ Aktiv" notation="wachsen">crevit</w> <w pos="Nominativ Singular, Maskulinum" notation="die Liebe">amor</w> </cl> <pc>.</pc> <cl type="hs"> <w pos="Nominativ Plural, Femininum" notation="die Hochzeitsfackeln">taedae</w> <w pos="-" notation="auch">quoque</w> <w pos="-" notation="rechtmäßig">iure</w> <w pos="3. Person Plural Plusquamperfekt Konjunktiv Aktiv" notation="zusammenkommen">coissent</w> <pc>,</pc> </cl>

              <lb n-individuell="7"/>
              <lb n-original="61"/>
              <cl type="ns"> <w pos="-" notation="aber">sed</w> <w pos="3. Person Plural Perfekt Indikativ Aktiv" notation="verbieten">vetuere</w> <w pos="Nominativ Plural, Maskulinum" notation="der Vater">patres</w> </cl> <pc>.</pc> <cl type="hs"> <w pos="Nominativ Singular, Neutrum" notation="Was">quod</w> <w pos="-" notation="nicht">non</w> <w pos="3. Person Plural Perfekt Indikativ Aktiv" notation="können">potuere</w> <w pos="Infinitiv" notation="verbieten">vetare</w> </cl> <pc>:</pc>

              <lb n-individuell="8"/>
              <lb n-original="62"/>
              <cl type="hs"> <w pos="-" notation="gleichermaßen">ex aequo</w> </cl> <cl type="ns"> <w pos="Ablativ Plural, Femininum" notation="fangen">captis</w> </cl> <cl type="hs"> <w pos="3. Person Plural Imperfekt Indikativ Aktiv" notation="brennen">ardebant</w> </cl> <cl type="ns"> <w pos="Ablativ Plural, Femininum" notation="der Sinn">mentibus</w> </cl> <cl type="hs"> <w pos="-" notation="beide">ambo</w> <pc>.</pc> </cl>
              </s>

              </div>
              </text>
              </TEI>`;

  textData: TextData = new TextData();
  // Used to change the header color
  Color = Color;
  // List of all the words that the user wants to memorize
  memorizedWordsList: Set<Word> = new Set();
constructor(
  private dialog: MatDialog,
  private converter: TeiConverterService) {
    this.textData = this.converter.convertTeiToObject(this.teiText);
  }

ngOnInit(): void {
  }
showTranslation(word: Word): void{
    const dialogRef = this.dialog.open(ShowTranslationDialogComponent, { panelClass: 'translation-dialog-container' });
    const instance = dialogRef.componentInstance;

    // Pushing the data into the component
    instance.word = word;
    console.log(word);
    dialogRef.afterClosed().subscribe((result: Word) => {
      // If the dialog component returns a word this word should be memorized
      if (result){
        this.memorizedWordsList.add(result);
      }
    });
  }
  /**
   * Tests if a sentence is currently indented
   * @param sentenceIndex The index of the sentence that should be tested
   */
  isSentenceIndented(sentenceIndex: number): boolean{
    return this.indentedSentences.has(sentenceIndex);
  }
  indentSentence(sentenceIndex: number): void{
    this.indentedSentences.add(sentenceIndex);
  }
  hideIndention(sentenceIndex: number): void{
    this.indentedSentences.delete(sentenceIndex);
  }
  // Removes a word from the list of memorized words
  removeWordFromList(word: Word): void{
    console.log(word);
    this.memorizedWordsList.delete(word);
  }
}
