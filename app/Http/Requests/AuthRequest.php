<?php

namespace Lewis\Surf\Http\Requests;

class AuthRequest extends Request
{
    public function rules()
    {
        return ['email' => 'required', 'password' => 'required'];
    }
}
