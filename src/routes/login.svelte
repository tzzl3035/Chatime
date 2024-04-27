<script>
let username;
let password;
async function Smt() {
	if(username == undefined || password == undefined || username == "" || password == "")
	{
		alert("用户名或密码不能为空!");
	}
	else
	{
		let loginR = await fetch(`login.json?name=${username}&pass=${password}`);
		let loginRes = (await loginR.json()).yes;
		if(loginRes)
		{
			location.pathname = `/home/${username}`;
		}
		else
		{
			alert("用户名或密码错误!");
		}
	}

}
</script>
<style>
	.all {
		width: 100%;
		height: 100%;
		border-radius: 3em;
	}
	h1 {
		color: lightblue;
		text-align: center;
		position: relative;
		top: 2em;
		line-height: 0.7em;
		font-size: 3.7em;
	}
	.top {
		margin-top: 3em;
	}
	.bigger {
		max-width: 56em;
		margin: 0 auto;
	}
</style>

<svelte:head>
	<title>登录</title>
</svelte:head>

<div class="all container bigger bg-success">
	<h1>登录</h1>
	<form id="form" style="margin-top: 15em;">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">用户名</div>
            <input class="form-control" autocomplete="off" bind:value={username}>
          </div>
        </div>
        <div class="form-group top">
          <div class="input-group">
            <div class="input-group-addon">密码</div>
            <input class="form-control" type="password" bind:value={password}>
          </div>
        </div>
        <div class="form-group top">
          <button class="btn btn-primary btn-block" on:click={Smt} type="button" style="outline:none;">登录</button>
        </div>
      </form>
  <p class="text-danger text-center" style="margin-top: 20%;">没有账户?去<a href="/logup">注册</a></p>
</div>
