import { is } from "@deepkit/type";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectLiteralType = _test_deepkit_is(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => is<ObjectLiteralType>(input),
    ObjectLiteralType.SPOILERS,
);