function AlumnosController($scope){
	$scope.alumnos=[
		{nombre:"Ana", telefono:"telefono 1", curso:"curso 1"},
		{nombre:"Raul", telefono:"telefono 2", curso:"curso 2"},
		{nombre:"Cristian", telefono:"telefono 3", curso:"curso 3"},
	];
	
	$scope.Save=function(){
		$scope.alumnos.push({
							nombre: $scope.nuevoAlumno.nombre,
							telefono: $scope.nuevoAlumno.telefono,
							curso: $scope.nuevoAlumno.curso
							 })
	}
}