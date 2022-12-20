import { is } from "@deepkit/type";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TupleRestObject = _test_deepkit_is(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => is<TupleRestObject>(input),
    TupleRestObject.SPOILERS,
);