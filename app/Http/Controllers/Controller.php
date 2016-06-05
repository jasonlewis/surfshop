<?php

namespace Lewis\Surf\Http\Controllers;

use Illuminate\Support\MessageBag;
use Lewis\Surf\Exceptions\ErrorHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;

class Controller extends BaseController
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;

    protected function error($statusCode, $data, $headers = [])
    {
        if ($data instanceof MessageBag) {
            $data = ['errors' => $data->all()];
        } elseif (! is_array($data)) {
            $data = ['errors' => [$data]];
        }

        $data['status_code'] = $statusCode;

        throw new ErrorHttpException($statusCode, $data, null, null, $headers);
    }
}
