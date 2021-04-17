// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const controllers = require('../controllers');
const { json } = require('express');

router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	const filters = req.query

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}

	controller.get(filters)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
});

router.get('/:resource/:id', (req, res)=>{
	const resource = req.params.resource
	const id = req.params.id
	const controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}

	controller.getById(id)
	.then(data =>{
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err=>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})

});

router.post('/:resource', (req , res) => {
	const resource = req.params.resource;
	const controller = controllers[resource];

	if( controller == null ){
		res.json({
			confirmation: 'Fail',
			message: 'Invalid Resource'
		})
		return;
	}

	controller.post( req.body )
	.then( data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	} )
	.catch( err => {
		res.json({
			confirmation: 'Fail',
			message: err.message
		})
	} );

});

router.put( '/:resource/:id', ( req, res ) => {
	const resource = req.params.resource;
	const id = req.params.id;
	const controller = controllers[resource];

	/* console.log(resource)
	console.log(id) */

	if( controller == null ){
		res.json({
			confirmation: 'Fail',
			message: 'Invalid Resource'
		})
		return;
	}

	controller.put( id, req.body )
	.then( data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	} )
	.catch( err => {
		res.json({
			confirmation: 'Fail',
			message: err.message
		})
	} );

} );


router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource;
	const id = req.params.id;
	const controller = controllers[resource];

	/* console.log(resource)
	console.log(id) */

	if( controller == null ){
		res.json({
			confirmation: 'Fail',
			message: 'Invalid Resource'
		})
		return;
	}

	controller.delete(id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'Fail',
			message: err.message
		})
	});

})

/* const Player = require('../models/Player');
const Team = require('../models/Team'); 

router.get('/team', (req, res)=>{
	Team.find(null)
	.then(data => {
		res.json({
			cofirmation: 'success',
			data : data
		})
	})
	.catch(err =>{
		res.json({
			cofirmation: 'Fail',
			data : err.message
		})
	})
	
});

router.get('/player', (req, res)=>{
	Player.find(null)
	.then(data => {
		res.json({
			cofirmation: 'success',
			data : data
		})
	})
	.catch(err =>{
		res.json({
			cofirmation: 'Fail',
			data : err.message
		})
	})
	
}); */

/* const players = [
	{firstName:"eli", lastName:"manning", position:"qb", age:37, team:"nyg"},
	{firstName:"tom", lastName:"brady", position:"qb", age:41, team:"nep"},
	{firstName:"jj", lastName:"wat", position:"de", age:28, team:"hou"}
];

const teams = [
	{name:"gigants", city:"new york", conference:"nfc"},
	{name:"patriots", city:"new england", conference:"afc"},
	{name:"texans", city:"houston", conference:"afc"}
];

const db = {
	team: teams,
	player: players
}

router.get('/:resource', (req, res) =>{
	const resource = req.params.resource;

	const data = db[resource];

	if(data == null){
		res.json({
			cofirmation: 'fail',
			data : 'Invalid Request. Resource Indefinided'
		})
	}
	
	res.json({
		cofirmation: 'success',
		data : data
	}) */

	

	/* if(resource == 'team'){
		res.json({
			cofirmation: 'success',
			data : teams
		})
		return;
	}

	if(resource == 'player'){
		res.json({
			cofirmation: 'success',
			data : players
		})
		return;
	} 

	res.json({
		cofirmation: 'fail',
		data : 'Invalid Request. Resource Indefinided'
	})*/
//})

/* router.get('/players', (req,res)=>{
	res.json({
		cofirmation: 'success',
		data : players
	})
});

router.get('/teams', (req,res)=>{
	res.json({
		cofirmation: 'success',
		data : teams
	})
}); */



module.exports = router