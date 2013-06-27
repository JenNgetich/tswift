var pronounce = [
'HH AA1',
'D UW1',
'CH EY1 N JH',
'S T IY1 V AH0 N',
'L IY1 V IH0 NG',
'S EY1 M',
'L AY1 T S',
'T AH0 N AY1 T',
'SH AY1 N',
'R IY1 Z AH0 N Z',
'CH UW1 Z',
'B Y UW1 T AH0 F AH0 L',
'Y UW1',
'EY1 N JH AH0 L',
'R EY1 N',
'EH1 L S',
'M AY2 S EH1 L F',
'M IY1',
'AH0 P S EH1 T',
' S EH1 D',
'N AY1 T',
'L AY1 K',
'S K ER1 T S',
'SH ER1 T S',
'K AE1 P T AH0 N',
'B L IY1 CH ER0 Z',
'F AY1 N D',
'T AY1 M',
'S IY1',
'W AH1 N',
'AH0 L AO1 NG',
' M IY1',
'JH IY1 N Z',
'B IY1',
'IY1 Z IY0',
'S M AY1 L',
'T AW1 N',
'AH0 W AY1 L',
'D AW1 N',
'DH AE1 T',
'HH IY1 L Z',
'S N IY1 K ER0 Z',
'B AE1 K D AO2 R',
' HH AW1 S',
'L AE1 F',
'K R AY1',
'S AO1 NG Z',
'D R IY1 M Z',
'B IH0 L AO1 NG',
'M EY1 B IY0',
'B R IY1 DH',
'S AA1 R IY0',
'W AY1',
'N OW1',
'W EY1 S T IH0 NG',
'ER0 AW1 N D',
'L AO1 NG',
'AW1 T',
'AH0 G EH1 N',
'EH2 N IY0 M AO1 R',
'F OW1 N',
'S T R AO1',
'S AA1 R IY0',
'B EY1 B IY0',
'B IH0 F AO1 R',
'OW1',
'IH1 N AH0 S AH0 N T',
' L AY1 F',
'K OW1 L D',
'S IY1 K R AH0 T S',
'L IH1 S AH0 N',
'HH AH1 N IY0',
'N OW1',
' B R AY1 T',
'F EY1 D',
'F AO1 R',
'Y UW1',
'AO1 L W EY2 Z',
'AY1',
'S AH1 M TH IH0 NG',
'K IH1 D IH0 NG',
'S P IY1 K',
' D AO1 R',
'K AO1 L D',
'AO1 L',
'AO1 L W EY2 Z',
'B EH1 D R UW2 M',
'R AO1 NG',
'G AO1 N',
'L AY1 N',
'HH AY1 D',
'B OY1',
'AY1 Z',
'SH UH1 R',
' N AH1 TH IH0 NG',
'K AO1 R',
'S OW1',
'AH1 P',
'EH1 V R IY0 TH IH2 NG',
'Y AE1',
'D EY1',
'OW1 L D',
' AA1 N',
'R AH1 N',
'P AE1 CH',
'R AY1 D Z',
'G OW1 L D',
'AH0 S L IY1 P',
'HH OW1 M',
' F AO1 L',
'AH0 W EY1',
'D EY1',
'T AH0 D EY1',
'N AW1',
'F R EH1 N D Z',
' M IY1 N',
'K IY1 Z',
'D R AY1 V',
'SH AA1 P',
'N EY1 M Z',
'T UW1',
'S K UW1 L',
'OW2 K EY1',
'F AA1 DH ER0',
'S T R AO1 NG ER0',
'B R AH1 DH ER0',
'AE1 M',
'V IH1 D IY0 OW0',
'TH R IY1',
'K IH1 CH AH0 N',
'SH IH1 P S',
'D W AO1 R F S',
'S M AA1 R T',
'W ER1 L D',
'S AY1 D',
'N UW1',
'S EY1',
'CH EY1 N JH',
'AH0 N D',
'P L EY1 S',
'IH1 T',
'TH R UW1',
' K AH1 M',
'W IH1 N',
'HH AE2 L AH0 L UW1 Y AH0',
'AW2 T N AH1 M B ER0 D',
'K AO1 R N ER0 D',
'F EH1 R',
'F AW1 N D',
'B IH1 G ER0',
'S K EH1 R D',
'DH IH1 S',
'N IY1 Z',
'Y IH1 R Z',
'L IH1 V Z',
'CH EY1 N JH D',
'IH0 N']

var stress = new RegExp("(\D\D1)");
var phoneme = stress.exec(pronounce[0]);