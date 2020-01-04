--  1
SELECT * from airplane where capacity >350;
--  2
SELECT NUMAP, NameP FROM airplane WHERE LOCALIATION = 'NICE';
--  3
SELECT NumP, Dep_T FROM FLIGHT;
--  4
select * from PILOT ;
--  5
select NameP from pilot where Address='paris' and salary > 15000;
--  6
SELECT NumAP,NameAP where Localisation = 'nice' and capacity < 350; 
--  7
select * from FLIGHT where Dep_T ='nice' and Arr_H > 18

--  8
SELECT NumP
FROM PILOT
WHERE NumP <> (SELECT NumP FROM FLIGHT);

--  9
SELECT NumF,Dep_T
FROM FLIGHT
WHERE NumP=100 AND NumP=204;

- PILOT (NumP, NameP, Address, Salary) 
- AIRPLANE (NumAP, NameAP, Capacity, Localisation) 
- FLIGHT (NumF, NumP, NumAP, Dep_T, Arr_T, Dep_H, Arr_H)

--Exercice 2
-- 1
SELECT*
FROM Emprunt
WHERE livre='Recueil Examens BD';

--2
SELECT*
FROM Retard
WHERE PenalitéRetard NULL;

--3



