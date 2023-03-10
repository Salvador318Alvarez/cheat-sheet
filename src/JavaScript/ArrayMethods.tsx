import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

const ArrayMethods = () => {
    const numbers = [1, 2, 3];
    numbers.forEach(number =>
        console.log(number))

    return ( 
    <>
    <Typography variant="h5" component="h2" gutterBottom>Array Methods</Typography> 
     <Box>
        <Paper elevation={7} sx={{paddingLeft:'1vh'}}>
            <Typography variant="h6" component="h3" gutterBottom>Array.forEach()</Typography>
            <Typography variant='body1' gutterBottom>
                -Executes a function once for each array element
            </Typography>
            <Typography variant='body1' gutterBottom>
                -Parameters: (element, index, array )
            </Typography>
            <Typography variant='body1' gutterBottom>
                -Always returns undefined
            </Typography>
            <Typography variant='body1' gutterBottom>
                -It is not chainable
            </Typography>
            <Typography variant='body1'>
                Example:
            </Typography>
            <div className='code'>
                <code>{'const numbers = [1, 2, 3];'}</code>
                <code>{'numbers.forEach(number =>'}</code>
                <code>{'console.log(number)'}    </code>
            </div>
            <p>Output:<code>1 2 3</code></p>
           
        </Paper>

        <Paper elevation={7} sx={{ paddingLeft:'1vh'}}>
            <Typography variant="h6" component="h3" gutterBottom>Array.filter()</Typography>
            <Typography variant='body1' gutterBottom>
                -calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. 
            </Typography>
            <Typography variant='body1' gutterBottom>
                -Array elements which do not pass the callbackFn test are not included in the new array.
            </Typography>
            <Typography variant='body1' gutterBottom>
                -Parameters: (element, index, array )
            </Typography>
            <Typography variant='body1' gutterBottom>
                -Returns: the new array that meets the condition
            </Typography>
            <Typography variant='body1'>
                Example:
            </Typography>
            <div className='code'>
                <code>{'const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];'}</code>
                <code>{'const result = words.filter(word => word.length > 6);'}</code>
                <code>{'console.log(result)'}</code>
            </div>
            <p>Output:<code>Array ["exuberant", "destruction", "present"]</code></p>
        </Paper>

        <Paper elevation={7} sx={{paddingLeft:'1vh'}}>
            <Typography variant="h6" component="h3" gutterBottom>Array.filter()</Typography>
            <Typography variant='body1' gutterBottom>
                -creates a new array populated with the results of calling a provided function on every element in the calling array. 
            </Typography>
            <Typography variant='body1' gutterBottom>
                -Parameters: (element, index, array )
            </Typography>
            <Typography variant='body1' gutterBottom>
                -Returns: a new array with each element being the result of the callback function.
            </Typography>
            <Typography variant='body1'>
                Example:
            </Typography>
            <div className='code'>
                <code>{'const array1 = [1, 4, 9, 16];'}</code>
                <code>{'const map1 = array1.map(x => x * 2);'}</code>
                <code>{'console.log(map1);'}</code>
            </div>
            <p>Output:<code>// Array [2, 8, 18, 32]</code></p>
        </Paper>
     </Box>
        </>
    );
}

 
export default ArrayMethods;