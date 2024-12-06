import FormLogin from "../components/Form/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <FormLogin />
    </AuthLayout>
  );
}
