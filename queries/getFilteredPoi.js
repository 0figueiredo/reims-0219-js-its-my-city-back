const getFilteredPoi = `SELECT p.*,  
user.name as 'author',  
picture.url as picurl,  
pk.keyword_id, 
keyword.name as keyword_name, 
grades.accessibility,  
grades.condition,  
grades.functional,  
ROUND((grades.accessibility + grades.condition + grades.functional)/3) AS 'average'  
FROM point_of_interest p  
JOIN user ON p.author_id = user.id  
JOIN picture ON picture.id=p.picture_id
  LEFT JOIN grades on grades.poi_id = p.id
    JOIN poi_keywords pk on pk.poi_id=p.id
     JOIN keyword on keyword.id=pk.keyword_id 
     WHERE keyword.name=?;
`;

module.exports = getFilteredPoi;
