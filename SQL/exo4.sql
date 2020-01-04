--  exercice 1
set serveroutput on 
DECLARE 
v_a NUMBER(5) :=1;
v_b NUMBER(5):=2;
v_c NUMBER(5);
BEGIN 
v_c := v_a;
v_a := v_b;
v_b := v_c;
DBMS_OUTPUT.PUT_LINE (' a ='||v_a||' b '||v_b);
end ;
/
--  exercice 2
DECLARE
v_a NUMBER:=4;
v_f NUMBER :=1;
v_counter NUMBER :=1;
BEGIN
LOOP
v_f:=v_f*(v_a-v_counter);
v_counter:=v_counter+1;
exit when v_counter >= 3;
end loop;
DBMS_OUTPUT.PUT_LINE('la factorielle de a est '||v_f);
END;
/
-- exercice 3
DECLARE 
v_id departments%TYPE;
BEGIN 
SELECT MAX(ID) INTO v_id from departments;
INSERT INTO departments (id) values (v_id+10);
END ;
/

-- exercice 4 
declare 
v_service departments.department_id%TYPE;
BEGIN
SELECT MAX(ID) INTO v_service from departments;
select department_id into v_service from departments

end;
/
--  exercice 5

declare 
v_service departments.department_id%TYPE;
BEGIN
SELECT MAX(ID) INTO v_service from departments;
select location_id into v_service from departments

DBMS_OUTPUT.PUT_LINE(v_service);
end;
/

-- exercice 6
SET SERVEROUTPUT ON
DECLARE
v_id_service departments.location_id%TYPE;
BEGIN
  UPDATE departments
  SET v_id_service=2500;
DBMS_OUTPUT.PUT_LINE('nombre de ligne'||SQL%ROWCOUNT);
END;
/

--exercice 7
SET SERVEROUTPUT ON
DECLARE
v_last_name employees.last_name%TYPE;
v_manager employees.manager%TYPE;
BEGIN
v_last_name:= &last_name;
DBMS_OUTPUT.PUT_LINE('Le manager de cet employé est'||v_manager);
END;
/


--exercice 10
SET SERVEROUTPUT ON
DECLARE v_salary employees.salary%TYPE;
BEGIN
SELECT name,salary
INTO v_name,v_salary
IF (v_salary<3000) THEN
v_salary:=v_salary+500;
DBMS_OUTPUT.PUT_LINE("<Employee Name>'s salary updated");
ELSE 
IF (v_salary>3000) THEN
DBMS_OUTPUT.PUT_LINE("<Employee Name>earns ....");
END;
/


--exercice 11
--1)
--a
SELECT NomS,Horaire
FROM Salle
WHERE Titre='Les misérables';
--b


--c
SELECT v.spectateur
FROM Vu v,Aime a
Where v.Titre=a.Titre 
AND v.spectateur=a.amateur;


















