import React from 'react';
import { 
	AppBar,  
	Toolbar, 
	IconButton, 
	Typography, 
	Button,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Divider,
	Box,
	ListSubheader,
	Grid,
	Hidden,
	Switch
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import { useTheme } from '@material-ui/core/styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle'; 

import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles((theme) => ({
  root: {
  	height: '100vh',
  	backgroundColor: theme.palette.background.dark,
  },
  appBar: {
  	zIndex: theme.zIndex.drawer + 1,
  	boxShadow: 'none'
  },
  MenuIcon: {
  	paddingRight: theme.spacing(5),
  	paddingLeft: theme.spacing(6)
  },
  icons: {
  	paddingRight: theme.spacing(3),
  },
  logo: {
  	height: 25,
  	cursor: 'pointer'
  },
  grow: {
  	flexGrow: 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  ListItemText: {
  	fontSize: 14,
  },
  listItem: {
  	paddingTop: 4,
  	paddingBottom: 4
  },
  subheader: {
    textTransform: 'uppercase',
    color: '#000'
  },
}));

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Kauê Sena',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Kauê Sena',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Kauê Sena',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Kauê Sena',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Kauê Sena',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Kauê Sena',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Kauê Sena',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Kauê Sena',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];

function Home({darkMode, setDarkMode}) {
	const classes = useStyles();
	const theme = useTheme();

	return(
		<div className={classes.root}>
		<AppBar color="inherit" className={classes.appBar}>
 		<Toolbar>
    	<IconButton className={classes.icons} color="inherit">
      	<MenuIcon />
    	</IconButton>


    	<img src={theme.palette.type === 'dark' ? '/images/branco.png' : '/images/preto.png'} alt="logo" className={classes.logo}/>
        <div className={classes.grow}/>
        <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} className={classes.icons} />

    	<IconButton className={classes.icons} >
      	<VideoCallIcon />
    	</IconButton>
  		<IconButton className={classes.icons} >
      	<AppsIcon />
    	</IconButton>
    	<IconButton className={classes.icons} >
      	<MoreVertIcon />
    	</IconButton>

    	<Button variant="outlined" color="secondary" startIcon={<AccountCircleIcon />}>Fazer login</Button>

  		</Toolbar>
		</AppBar>

		<Box display='flex'>
		<Hidden mdDown>
			
		
		<Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          
              <ListItem button className={{root: classes.listItem}}>
              	<ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText 
                classes={{
                	primary: classes.ListItemText
                }}
                primary={'Início'} 
                />
              </ListItem>

              <ListItem button className={{root: classes.listItem}}>
              	<ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText 
                classes={{
                	primary: classes.ListItemText
                }}
                primary={'Em alta'} 
                />
              </ListItem>

              <ListItem button className={{root: classes.listItem}}>
              	<ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText 
                classes={{
                	primary: classes.ListItemText
                }}
                primary={'Inscrições	'} 
                />
              </ListItem>

          </List>

          <Divider />

          		<ListItem button className={{root: classes.listItem}}>
              	<ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText 
                classes={{
                	primary: classes.ListItemText
                }}
                primary={'Biblioteca'} 
                />
              </ListItem>

              <ListItem button className={{root: classes.listItem}}>
              	<ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                <ListItemText 
                classes={{
                	primary: classes.ListItemText
                }}
                primary={'Histórico'} 
                />
              </ListItem>
              <Divider />

              <Box p={4}>
              	<Typography variant="body2">
              		Faça Login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <br/>
                <Button
                 variant='outlined'
                 color='secondary'
                 startIcon={< AccountCircleIcon/>}>
                 Fazer login
                </Button>
              </Box>

              <Divider />

              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
        </div>
      </Drawer>
</Hidden>
      	<Box p={3}>
      		<Toolbar/>
      		<Typography
      		variant='h5'
      		color='textPrimary'
      		style={{ fontWeight: 600 }}>
      		Recomendados
      		</Typography>

      		<Grid container spacing={3}>
      			{videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
      		</Grid>
      	</Box>
      	</Box>
		</div>
	);
}

export default Home;