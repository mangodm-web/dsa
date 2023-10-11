WITH more_than_five_reports_list AS (

    SELECT managerId
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(*) >= 5

)

SELECT name
  FROM Employee
 WHERE id IN (SELECT managerId FROM more_than_five_reports_list);
 