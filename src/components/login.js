import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  
  const SimpleRegistrationForm = () => {
    return (
      <div className="flex items-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto"> {/* Add mx-auto class here */}
          <h1 className="mb-4 text-3xl font-semibold text-gray-600 dark:text-gray-200">Admin Portal</h1>
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Log in
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to Login.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6 items-start">
                <Input size="lg" label="Name" />
                <Input size="lg" label="Email" />
                <Input type="password" size="lg" label="Password" />
              </div>
              <Button className="mt-6" fullWidth>
                Log in to your account
              </Button>
            </form>
          </Card>
        </div>
      </div>
    );
  };
  
  export default SimpleRegistrationForm;
  