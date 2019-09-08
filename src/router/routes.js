
import App from '@/App'
import Footers from '@/components/common/Footer'
import Headers from '@/components/common/Header'
import Menu from '@/components/Menu'
import Movie from '@/components/Movie'
import Playing from '@/components/Playing'
import City from '@/components/city/City'
import Mine from '@/components/Mine'
import Cinema from '@/components/cinema/Cinema'
import Search from '@/components/Search'
import Page from '@/components/common/Page'


export const routes = [
	{
		path : '/',
		name : 'App',
		component : App,
		redirect : '/Movie'
	},
	{
		path : '/Footer',
		name : 'Footers',
		component : Footers
	},
	{
		path : '/Header',
		name : 'Headers',
		component : Headers
	},
	{
		path : '/Menu',
		name : 'Menu',
		component : Menu
	},
	{
		path : '/Playing',
		name : 'Playing',
		component : Playing
	},
	{
		path : '/Movie',
		name : 'Movie',
		component : Movie
	},
	{
		path : '/city',
		name : 'City',
		component : City
	},
	{
		path : '/Mine',
		name : 'Mine',
		component : Mine
	},
	{
		path : '/Cinema',
		name : 'Cinema',
		component : Cinema
	},
	{
		path : '/Search',
		name : 'Search',
		component : Search
	},
	{
		path : '/Page',
		name : 'Page',
		component : Page
	}
]