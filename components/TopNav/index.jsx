import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function TopNav({ title }) {
	return (
		<>
			<AppBar position='fixed' color='primary'>
				<Toolbar>
					<Typography variant='h6'>{title}</Typography>
				</Toolbar>
			</AppBar>
		</>
	)
}
