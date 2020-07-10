export const filterObjs = [
  {
    'name':'High ABV (>6.0%)',
    'state': 'highAbv',
    'filterFn': ((data) => data.filter(beer => beer.abv >= 6.0))
  },
  
  {
    'name': 'Classic Range',
    'state': 'classic',
    'filterFn': ((data) => data.filter(beer => beer.first_brewed.slice(3) < '2010')),
  },
  
  {
    'name': 'Acidic (ph < 4)',
    'state': 'acidic',
    'filterFn': ((data) => data.filter(beer => beer.ph < 4)),
  }
]

export const filtersAPI = [
  {
    'name':'High ABV (>6.0%)',
    'state': 'highabv',
    'filterUrl': '&abv_gt=6'
  },
  
  {
    'name': 'Classic Range',
    'state': 'classic',
    'filterUrl': '&brewed_before=11-2012'
  },

  {
    'name': 'High IBU (>100)',
    'state': 'highibu',
    'filterUrl': '&ibu_gt=100'
  },

]