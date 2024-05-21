
function Login() {
	return (
	<div>
				<fieldset >
					<img
						src="https://static-00.iconduck.com/assets.00/profile-user-icon-2048x2048-m41rxkoe.png"
						height="80px"
						width="80px"
					/><br/>
					<input
						type="text"
						placeholder="Username"
						size="20"
						style={{ textAlign: 'center' }}
					/>
					<br />
					<input
						type="password"
						placeholder="Password"
						size="20"
						maxlength="12"
						style={{ textAlign: 'center' }}
					/>
					<br />
					<a href="#" class="forget_p">Forgot Password?</a>
					<br />
					<input type="button" class="login_button" value="Login" />
					<br />
				</fieldset>
		</div>
	)
}
export default Login;