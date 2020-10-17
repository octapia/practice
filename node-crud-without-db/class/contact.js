class contact {
	constructor(){
		this.data = [];
	}

	create(newData){
		let id = this.data.length + 1;
		newData.id = id;
		this.data.push(newData);
		return true;
	}

	read(){
		return this.data;
	}

	readById(id){
		return this.data.find(data => data.id === id)
	}

	update(newData){
		let index =  this.data.findIndex(data => {
			return data.id === newData.mainId;
		})
		this.data[index].name = newData.name || this.data[index].name;
		this.data[index].age = newData.age || this.data[index].age;
		return this.data[index];

	}

	deleteAll(){
		this.data = [];
		return true;
	}
	deleteById(id){		
		let deletedData = this.data.find(data => data.id === id);
		let newDataArray = this.data.filter(data => data.id !== id);
		this.data = [...newDataArray];
		return deletedData;
	}
}
module.exports = new contact();